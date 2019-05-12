import React, {Component} from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Link } from 'gatsby'

class SectionItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scale: 1
        };

    }

    render() {

        const project = this.props.project;

        let image_scale = project.imageScale ? project.imageScale : 1;

        let data = '';

        let data_portrait = '';

        if (project.slug != "home-video") {

            if (project.medias.length > 0) {

                const backgroundLandscape = {
                    backgroundImage: `url(${project.medias[0].file.url})`,
                    transform: 'scale(' + image_scale + ')'
                };

                const backgroundPortrait = {
                    backgroundImage: `url(${project.medias[1].file.url})`,
                    transform: 'scale(' + image_scale + ')'
                };

                switch (project.model) {
                    case 'Screen':
                        data = <div className="image image--fullpage landscape"
                                    style={backgroundLandscape}></div>;
                        data_portrait = <div className="image image--fullpage portrait" 
                                    style={backgroundPortrait}></div>;
                        break;
                    case 'Width':
                        data = <div className="image image--width landscape" 
                                    style={backgroundLandscape}></div>;
                        data_portrait = <div className="image image--width portrait" 
                                    style={backgroundPortrait}></div>;
                        break;
                    case 'Height':
                        data = <div className="image image--height landscape" 
                                    style={backgroundLandscape}></div>;
                        data_portrait = <div className="image image--height portrait"
                                    style={backgroundPortrait}></div>;
                        break;
                }

            }


        } else {

            const swiperClass = `swiper--video swiper--video-${project.model}`;

            if (!project.medias) {

                data = <div className={swiperClass}>

                    <div className="video video--iframe vimeo">

                        <Vimeo
                            className="video__wrap"
                            video={project.embedVimeo}
                            muted={false}
                            autoplay={true}
                            loop={true}
                            showTitle={false}
                            showByline={false}
                            showPortrait={false}

                        />

                    </div>

                </div>;

            } else {

                let media = project.medias[0].file;

                data = <div className={swiperClass}>

                    <div className="video video--iframe">

                       <video className="video-mp4" autoPlay={true} loop ={true} playsInline muted>
                            <source src={media.url} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        
                    </div>

                </div>;

            }
        }

        return <div className="swiper-slide">
            <Link to='/projects'>{data}{data_portrait}</Link>
        </div>
    }
}

export default SectionItem;