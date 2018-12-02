import React from 'react';
import { Radio } from 'antd';
import { Lang } from '../../../utils';

const NewSearchStepOneRadioButtonShipping = (props) => {
    return (
        <Radio.Group defaultValue={1} buttonStyle="solid">
            <Radio.Button value={1}>{Lang.trans('Boxes/Crates')}</Radio.Button>
            <Radio.Button value={2}>{Lang.trans('Pallets')}</Radio.Button>
        </Radio.Group>
    );
};

export default NewSearchStepOneRadioButtonShipping;