const ParallelRoutesLayout = ({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) => {
  return (
    <div>
      <h3>Parallel Routes Layout</h3>
      <div>{children}</div>
      <div className="grid grid-cols-2">
        {team}
        {analytics}
      </div>
    </div>
  );
};

export default ParallelRoutesLayout;
