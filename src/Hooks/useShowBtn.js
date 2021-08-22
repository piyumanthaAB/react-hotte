import { useEffect, useState } from "react";

const useShowBtn = () => {
    
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        
        // window.addEventListener('scroll', () => {
        //     if (window.pageYOffset > 600) {
        //         setShowBtn(true);
        //     } else {
        //         setShowBtn(false);
        //     }
        // });

        const handleScroll = () => {
            if (window.pageYOffset > 600) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // console.log('cleanup');
        }
        
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return showBtn;
}

export default useShowBtn;