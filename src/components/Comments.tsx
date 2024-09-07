import { commentProps } from "@lib/types";

import { Divider, Group , Text , Rating } from "@mantine/core";


export default function Comments({name , rating , details} : commentProps) {
  return (
    <div>
        <Divider mb={"sm"}/>
        <Group justify="center">
            <Text size="lg" fw={"bold"}>
                {name}
            </Text>
            <Rating 
                value={rating} 
                readOnly/>
        </Group>
        <Text size="15px" ta={"center"} mt={"sm"} c={"gray"} mb={"sm"}>{details}</Text>
    </div>
  );
}
