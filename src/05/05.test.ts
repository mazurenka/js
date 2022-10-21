import {messages} from "./05";

test("Messages should be added to array ppls", () => {
    let newPeoples = messages

    expect(newPeoples[0]).toBe("Hello John,Snow, welcome to Florida!")

})