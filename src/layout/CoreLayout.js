export function CoreLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden mx-32">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-16 py-10 w-full h-full mx-auto max-w-screen-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
