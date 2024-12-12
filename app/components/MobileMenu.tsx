type MobileMenuT = {
  setIsOpen: (value: boolean) => void;
  onClickMenu: (to: string) => void;
};
export default function MobileMenu({ setIsOpen, onClickMenu }: MobileMenuT) {
  const handleClick = (to: string) => {
    setIsOpen(false);
    onClickMenu(to);
  };
  return (
    <div className="pb-footer fixed top-0 flex h-full w-full flex-col sm:hidden">
      <div
        className="w-full flex-grow bg-black bg-opacity-25"
        onClick={() => setIsOpen(false)}
      />
      <div className="flex-center-col gap-5 border-t border-black bg-main p-5">
        <div onClick={() => handleClick('home')}>Strona główna</div>
        <div onClick={() => handleClick('about')}>O Nas</div>
        <div onClick={() => handleClick('projects')}>Projekty</div>
        <div onClick={() => handleClick('partners')}>Partnerzy</div>
        <div onClick={() => handleClick('contact')}>Kontakt</div>
      </div>
    </div>
  );
}
