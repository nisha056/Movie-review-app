import { Button, Textarea, TextInput } from "@mantine/core";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";

const Content = () => {
    const data = [''];


    const [value, setValue] = useState("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);


    }
    const handleSubmit = () => {
        // data.push(value) will only give the number of arrays that is being pushed
        data.push(value);
        const output = data.join(" ");
        console.log(output);


    }
    return (
        <>
            <div className="flex flex-col m-5 w-1/2 justify-center ">
                <p className="m-5 text-center  text-red-500 text-2xl">Welcome!</p>

                <TextInput className="w-full" label="Description" placeholder=" Start Writing...." size="xl"
                    withAsterisk radius="md" onChange={handleChange} value={value} />

                <Button onClick={handleSubmit} className="bg-blue-500 mt-5">Submit</Button>



            </div>

        </>
    )
}
export default Content;