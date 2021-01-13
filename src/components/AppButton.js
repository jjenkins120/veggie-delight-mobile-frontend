import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Button } from 'react-native-elements'

const AppButton = ({title, onPress}) => {
    return (
        <View style={styles.container}>
            <Button 
                title={title}
                onPress={onPress}
                buttonStyle={styles.button}
                raised
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginHorizontal: 30 
    },
    button: {
        display: 'flex',
        fontFamily: '',
        textTransform: 'uppercase',
        color: '#ffffff',
        backgroundColor: 'purple',
        position: 'relative',
        borderRadius: 20,
        padding: 15
    }
})

export default AppButton

// .fancy-button {
// 	display: inline-block;
// 	margin: 30px;
// 	font-family: 'Montserrat', Helvetica, Arial, sans-serif;
// 	font-size: 17px;
// 	letter-spacing: 0.03em;
// 	text-transform: uppercase;
// 	color: #ffffff;
// 	position: relative;
	
// 	&:before {
// 		content: '';
// 		display: inline-block;
// 		height: 40px;
// 		position: absolute;
// 		bottom: -5px;
// 		left: 30px;
// 		right: 30px;
// 		z-index: -1;
// 		border-radius: 30em;
// 		filter: blur(20px) brightness(0.95);
// 		transform-style: preserve-3d;
// 		transition: all 0.3s ease-out;
// 	}
// 	i {
// 		margin-top: -1px;
// 		margin-right: 20px;
// 		font-size: 1.265em;
// 		vertical-align: middle;
// 	}
// 	span {
// 		display: inline-block;
// 		padding: 18px 60px;
// 		border-radius: 50em;
// 		position: relative;
// 		z-index: 2;
// 		will-change: transform, filter;
// 		transform-style: preserve-3d;
// 		transition: all 0.3s ease-out;
// 	}
// 	&:focus,
// 	&:active {
// 		color: #ffffff;
// 	}
// 	&:hover {
// 		color: #ffffff;
		
// 		span {
// 			filter: brightness(1.05) contrast(1.05);
// 			transform: scale(0.95);
// 		}
// 		&:before {
// 			bottom: 0;
// 			filter: blur(10px) brightness(0.95);
// 		}
// 	}
// 	&.pop-onhover {
		
// 		&:before {
// 			opacity: 0;
// 			bottom: 10px;
// 		}
// 		&:hover {
			
// 			&:before {
// 				bottom: -7px;
// 				opacity: 1;
// 				filter: blur(20px);
// 			}
// 			span {
// 				transform: scale(1.04);
// 			}
// 			&:active {
				
// 				span {
// 					filter: brightness(1) contrast(1);
// 					transform: scale(1);
// 					transition: all 0.15s ease-out;
// 				}
// 				&:before {
// 					bottom: 0;
// 					filter: blur(10px) brightness(0.95);
// 					transition: all 0.2s ease-out;
// 				}
// 			}
// 		}
// 	}
// }