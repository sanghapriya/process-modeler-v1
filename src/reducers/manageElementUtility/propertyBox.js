import React from 'react';
import PropertyBox from '../../components/propertyBox.component'

export default function propertyBox(state,action,){

    return {
        ...state,
        propertyBox:<PropertyBox/>}
};