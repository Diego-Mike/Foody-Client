const UserLoading = () => {
  return (
    <div className="flex items-center justify-between w-full ml-3">
      <div
        data-testid="skeleton"
        className="w-[35px] h-[35px] animate-pulse rounded-full bg-slate-400"
      />
      <div className="w-[145px] h-[30px] bg-slate-400 animate-pulse rounded-md" />
    </div>
  );
};

export default UserLoading;
