import React from 'react'
import { Link } from 'gatsby'
import renderHTML from 'react-render-html';

let Footer = ({ data_config, japan, color }) => {
    
    const style_color = {
        color: color ? color : data_config.footer_color
    }

    if (japan) {
        return <div className="footer" style={style_color}>
            <div>
                <span>                
                    {data_config.footer_text ? renderHTML(data_config.footer_text) : ''}
                </span>
            </div>
        </div>
    }

    return (
        <div className="footer" style={style_color}>
            <div>
                <span className="only_mobile_inline m-r-10">
                    <Link to='/page/bio-in-japanese'>日本語</Link>
                </span>

                <span>
                    {data_config.footer_text ? renderHTML(data_config.footer_text) : ''}
                </span>
            </div>
        </div>
    )
}

export default Footer