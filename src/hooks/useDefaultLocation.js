import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiGeoLocation } from '../redux/middlewares/api';
import { toast } from 'react-toastify';

export const useDefaultLocation = () => {

    const dispatch = useDispatch();

    // default to Tel Aviv
    const defaultLocation = { 
		LocationKey: '215854',
		LocalizedName: 'Tel Aviv'
    };
    
    const [ location, setLocation ] = useState( defaultLocation );
    const [ isLocated, setIsLocated ] = useState( false );

    const toastIds = {

        info: 'toast-info-locate',
        success: 'toast-success-locate',
        error: 'toast-error-locate'

    };


    // use device location if present
    const getGeoLocation = () => {

        toast.info( 'Locating your device...', { toastId: toastIds.info } );
        
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
          
        const success = ( pos ) => {
            
            setIsLocated( true );
            setLocation( {} );

            toast.dismiss( toastIds.info )
            toast.success( 'Located successfully!', { toastId: toastIds.success } );

            dispatch( apiGeoLocation( pos.coords, setLocation ) );
        }
          
        const error = () => {

            setIsLocated( false );

            toast.dismiss( toastIds.info )
            toast.error( 'Cannot locate your device', { toastId: toastIds.error } );

        }
          
        navigator.geolocation.getCurrentPosition( success, error, options );
    
    }
    
    if( !isLocated )
        getGeoLocation();

    return [ location, isLocated ];

}