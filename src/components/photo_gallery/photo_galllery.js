import * as React from 'react';
import StandardImageList from '../image_list/img_list'
import ResponsiveAppBar from '../navbar/navbar';
import ColorInversionAnyParent from '../footer/footer';

export default function PhotoGallery() {
    return (
        <React.Fragment>
            <ResponsiveAppBar></ResponsiveAppBar>
            <StandardImageList></StandardImageList>
            <ColorInversionAnyParent></ColorInversionAnyParent>
        </React.Fragment>
    )
}
