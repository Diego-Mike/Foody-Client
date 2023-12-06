FROM node:18-alpine AS base

# install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# build source code
FROM base as builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY .env.example .env.local
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID
RUN yarn build

# prod image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_SHARP_PATH=/app/node_modules/sharp
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

# optimize image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD [ "node", "server.js" ]
