import React, {useState} from 'react';
import {CleanButton} from "../../Component/Buttons/Button";

export const AllButtonExample = (props: any) => {

    type filter = 'All' | 'Active' | 'Completed';
    let [filterBS, setFilterBS] = useState<filter>('All');

    const onAllClickHandlerAll = () => setFilterBS("All")
    const onAllClickHandlerActive = () => setFilterBS("Active")
    const onAllClickHandlerCompleted = () => setFilterBS("Completed")

    return (
        <div>
            <CleanButton
                activeButton={filterBS}
                onClickHandler={onAllClickHandlerAll}
                title={'All'}
            />
            <CleanButton
                activeButton={filterBS}
                onClickHandler={onAllClickHandlerActive}
                title={'Active'}
            />
            <CleanButton
                activeButton={filterBS}
                onClickHandler={onAllClickHandlerCompleted}
                title={'Completed'}
            />
        </div>
    );
};