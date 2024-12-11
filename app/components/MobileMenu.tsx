export default function MobileMenu({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <div className="pb-footer fixed top-0 flex h-full w-full flex-col sm:hidden">
      <div
        className="w-full flex-grow bg-black bg-opacity-25"
        onClick={() => setIsOpen(false)}
      />
      <div className="flex-center-col gap-5 border-t border-black bg-main p-5">
        <div>Strona główna</div>
        <div>O nas</div>
        <div>Projekty</div>
        <div>Partnerzy</div>
        <div>Kontakt</div>
      </div>
    </div>
  );
}
