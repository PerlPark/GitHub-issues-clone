import Button from "./Button";

function Footer() {
  return (
    <footer className="border-t py-4 fixed w-full bottom-0 bg-white">
      <div className="max-w-3xl flex justify-between gap-4 mx-auto">
        <Button type="primary" size="full">
          load
        </Button>
        <Button type="secondary" size="full">
          초기화
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
