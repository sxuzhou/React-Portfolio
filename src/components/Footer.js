import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/sam-zhou/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">Linkdin</span></a></li>
                        <li><a href="https://github.com/sxuzhou" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">Github</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
