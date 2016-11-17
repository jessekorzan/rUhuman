# rUhuman
## A simple captcha alternative. 
### Little bit of JS and SASS/CSS is all (and it degrades not too shabby).

![alt text](https://github.com/jessekorzan/rUhuman/blob/master/assets/img/pMm2ycJPxl.gif "diagram")
---
`.ui-form-no-robot {
    background: #cdcdcd;
    padding: 18px 12px;
    display: block;
    margin-top: 22px;
    text-align: center;
    transition: all 260ms ease-in-out;
    &:before {
        content: "For humans only. Adjust slider.";
        font-weight: bold;
    }
    label {
        margin: 11px 0 0;
        display: block !important;
        i {
            font-style: normal;
        }
        span:first-child {
            &:after {
                content: " + ";
            }
        }
        span:nth-child(2) {
            &:after {
                content: " = ";
            }
        }
    }
    input {
        width: calc(100% - 24px);
        margin: 8px auto 0;
        text-align: center;
    }
    &.confirmed {
        background: rgba(lime, 0.25);
        &:before {
            content: "Yes! You're a lovely human!";
        }
    }
}`
