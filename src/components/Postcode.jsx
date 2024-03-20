import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { IoSearch } from "react-icons/io5";

export default function Postcode({setValue}) {
    const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const open = useDaumPostcodePopup(scriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        // console.log(fullAddress);
        // 주소 input에 넣기
        setValue("address", fullAddress);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <button type='button' onClick={handleClick}>
        <IoSearch size="24px" color="#036280" />
        </button>
    );
};