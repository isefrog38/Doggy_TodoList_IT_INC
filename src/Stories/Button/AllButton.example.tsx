import React, {useState} from 'react';
import {Buttons} from "../../Component/Button";

export const AllButtonExample = (props: any) => {

    type filter = 'All' | 'Active' | 'Completed';
    let [filterBS, setFilterBS] = useState<filter>('All');

    const onAllClickHandlerAll = () => setFilterBS("All")
    const onAllClickHandlerActive = () => setFilterBS("Active")
    const onAllClickHandlerCompleted = () => setFilterBS("Completed")

    return (
        <div>
            <Buttons
                activeButton={filterBS}
                onClickHandler={onAllClickHandlerAll}
                title={'All'}
            />
            <Buttons
                activeButton={filterBS}
                onClickHandler={onAllClickHandlerActive}
                title={'Active'}
            />
            <Buttons
                activeButton={filterBS}
                onClickHandler={onAllClickHandlerCompleted}
                title={'Completed'}
            />
        </div>
    );
};