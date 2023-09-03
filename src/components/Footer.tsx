import { useAppDispatch } from "../app/hooks";
import { nextPage } from "../slices/issuesSlice";
import Button from "./Button";

function Footer() {
  const dispatch = useAppDispatch();

  return (
    <footer className="border-t py-4 bg-white">
      <div className="max-w-3xl flex justify-between gap-4 mx-auto">
        <Button
          color="primary"
          size="full"
          onClick={() => {
            dispatch(nextPage());
          }}
        >
          load
        </Button>
        <Button color="secondary" size="full">
          초기화
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
