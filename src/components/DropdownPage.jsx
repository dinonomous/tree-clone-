import React, { useState } from 'react';

const DropdownContainer = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <p>{question}</p>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="dropdown-body">{answer}</div>}
        </div>
    );
};

const DropdownPage = () => {
    const data = [
        {
            question: "Why do I need a link in bio tool?",
            answer: "Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date. \n\nA link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once."
        },
        {
            question: "Is Linktree the original link in bio tool?",
            answer: "The short answer? Yes! \n\nBack in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!"
        },
        {
            question: "Is Linktree the original link in bio tool?",
            answer: "The short answer? Yes! \n\nBack in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!"
        },
        {
            question: "Is Linktree the original link in bio tool?",
            answer: "The short answer? Yes! \n\nBack in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!"
        },
        {
            question: "Is Linktree the original link in bio tool?",
            answer: "The short answer? Yes! \n\nBack in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!"
        },
        {
            question: "Is Linktree the original link in bio tool?",
            answer: "The short answer? Yes! \n\nBack in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!"
        },
        // Add more questions and answers as needed
    ];

    return (
        <div className="dropdown-page">
            <h2>Got questions?</h2>
            {data.map((item, index) => (
                <DropdownContainer 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
};

export default DropdownPage;
