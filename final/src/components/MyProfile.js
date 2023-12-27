import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./path-to-your-redux-slice";

const MyProfile = () => {
const dispatch = useDispatch();
const { isLoading, data, isError } = useSelector((state) => state.data);

useEffect(() => {
    dispatch(fetchData());
}, [dispatch]);

if (isLoading) {
    return <p>Loading...</p>;
}

if (isError) {
    return <p>Error loading data</p>;
}

return (
    <div>
    <h1>My Profile</h1>
    {data && (
        <div>
        <p>Name: {data.name}</p>
        </div>
    )}
    </div>
);
};

export default MyProfile;
