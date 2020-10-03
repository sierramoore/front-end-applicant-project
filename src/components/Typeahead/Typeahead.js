import React, { useState, useEffect, useRef } from 'react';
import { Container, Header, Input, Ul, Li, BoldMatch } from './Typeahead.style';
import PropTypes from 'prop-types';

export const Typeahead = ({list}) => {
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState("");
    const regexp = new RegExp(`^${search}`, 'i');
    const wrapperRef = useRef(null);

    useEffect(() => {
  
    }, [search, display]);

    const displayList = list
    .filter(item => regexp.test(item))
    .map((value, index) => {
        const boldened = value.slice(0, search.length);

        return (
            <Li background={value} key={index} tabIndex="0" onClick={()=>(setSearch(value))}>
                <BoldMatch>{boldened}</BoldMatch>
                {
                    value.slice(search.length) 
                }
            </Li>
        )
    })

    
        useEffect(() => {
            const handleClickOutside = (e) => {
                if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                    setDisplay(false)
                }
            }
            const escFn = (e) => {
                if(e.keyCode === 27){
                    setDisplay(false)
                }
            }
            const enterFn = (e) => {
                if(e.keyCode === 13){
                    // if the activeElem is contained inside our ref which is the ul then setsearch to the text of that element
                    if(!!wrapperRef.current && wrapperRef.current.contains(document.activeElement)) setSearch(document.activeElement.textContent);
                }
            }
            document.addEventListener('keydown', escFn, false)
            document.addEventListener('keydown', enterFn, false)
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener('keydown', escFn, false)
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [display]);
    

    return (
        <Container >
            <Header>Color Finder</Header>
            <Input
                placeholder="Find a color"
                onClick={() => setDisplay(!display)}
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            {display && (
                <Ul ref={wrapperRef} >
                    {displayList}
                </Ul>
            )
            }
        </Container>
    )
}

Typeahead.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string)
}



