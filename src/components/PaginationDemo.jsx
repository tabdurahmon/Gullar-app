import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { limitSkip } from "../lib/my-utils";

export default function PaginationDemo({ setSkip, total, skip }) {
  return (
    <Pagination>
      <PaginationItem className="list-none">
        <PaginationPrevious
          onClick={(e) => {
            e.preventDefault();
            setSkip((prev) => {
              if (prev > 0) {
                return prev - limitSkip;
              } else return 0;
            });
          }}
          text="Oldingi"
          href="#"
        />
      </PaginationItem>

      <PaginationItem className="list-none">
        <PaginationNext
          onClick={(e) => {
            e.preventDefault();
            setSkip((prev) => {
              if (prev + skip > total) {
                return prev;
              } else {
                const newSkip = prev + limitSkip;
                return newSkip;
              }
            });
          }}
          text="Keyingi"
          href="#"
        />
      </PaginationItem>
    </Pagination>
  );
}
