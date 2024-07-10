import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
  className?: string;
}
const SumbitButton = ({ isLoading, className, children }: Props) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            height={24}
            width={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SumbitButton;
