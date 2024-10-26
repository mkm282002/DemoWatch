import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Clock = () =>
{
    const [ time, setTime ] = useState( new Date() );
    
    useEffect( () =>
    {
        const timer = setInterval( () =>
        {
            setTime( new Date() );
        } );
        return () =>
            clearInterval( timer );
    }, [];
