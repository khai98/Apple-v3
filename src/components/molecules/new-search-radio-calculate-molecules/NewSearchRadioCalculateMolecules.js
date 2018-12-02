import React from 'react';
import { Tooltip, Radio } from 'antd';
import { Lang } from '../../../utils';

const RadioGroup = Radio.Group;

const NewSearchNexStep = (props) => {
    return (
        <Tooltip placement="top" title={props.text}>
            <RadioGroup onChange={props.onChange} defaultValue={props.checkCalculateBy}>
                <Radio style={{margin: '7.5px 15px 6px 0'}} value={1}>{Lang.trans('Calculate by boxes/pallets')}</Radio>
                <Radio style={{margin: '7.5px 15px 6px 0'}} value={2}>{Lang.trans('Calculate by total shipment')}</Radio>
            </RadioGroup>
        </Tooltip>
    );
};

export default NewSearchNexStep;