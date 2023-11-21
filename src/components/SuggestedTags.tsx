import Tag from "./Tag";
import {Stack} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../store/store";

type SuggestedTagsProps = {
    customTag: string;
    addNewTag: (value: string) => void;
}

const SuggestedTags = ({customTag, addNewTag}: SuggestedTagsProps) => {
    const suggestedTags = useAppSelector(state => state.comment).
        suggestedTags;
    const [suggestedTagsFiltered, setFilterSuggestedTags] = useState<string[]>([]);

    const filterSuggestedTags = () => {
        console.log(customTag)
        if(customTag.length > 0){
            setFilterSuggestedTags(suggestedTags.filter(t => t.includes(customTag)).slice(0, 5));
        }else{
            setFilterSuggestedTags([]);
        }
    }

    useEffect(() => {
        filterSuggestedTags();
    }, [customTag])

    return(
        <Stack direction="horizontal" gap={2}>
            {suggestedTagsFiltered.map((t: string, index: number) => {
                return (
                    <div key={index} onClick={() => addNewTag(t)}>
                        <Tag value={t}/>
                    </div>
                )
            })}
        </Stack>
    )
}

export default SuggestedTags;
