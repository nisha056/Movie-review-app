import { Card } from "@mantine/core";

const UpcomingCard = (props: any) => {
    return (
        <div className="flex flex-col  items-center h-full overflow-y-auto  ">
            <Card className="w-full  " style={{ padding: 5, width: "200px" }}>
                <img src={props.image}
                    className="w-full object-cover h-full "

                />

            </Card>
            <p className="text-white font-bold ">{props.details.description}</p>
            <p className="text-gray-600">{props.details.date}</p>

        </div>

    )
};
export default UpcomingCard;