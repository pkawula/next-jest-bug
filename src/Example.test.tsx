import {render} from "@testing-library/react";
import { Example } from "./Example";

describe("example component", () => {
    it("renders properly", () => {
        const { queryByText } = render(<Example />);

        expect(queryByText("Hello")).toBeInTheDocument();
    })
})