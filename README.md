# rUhuman
## A simple captcha alternative. 
### Little bit of JS and SASS/CSS is all (and it degrades not too shabby).

![alt text](https://github.com/jessekorzan/rUhuman/blob/master/assets/img/pMm2ycJPxl.gif "diagram")
---
` .ui-form-no-robot {
    background: $cyan-lighter;
    padding: 18px 12px;
    display: block;
    margin-top: 22px;
    text-align: center;
    transition: all 260ms ease-in-out;
    font-family: monospace;
    font-size: 18px;
    &:before {
        content: "For humans only. Adjust slider.";
        font-weight: bold;
    }
    label {
        padding: 0 !important;
        margin: 11px 0 0 !important;
        display: block !important;
        
        &:before {
            //content: "For humans only. Adjust slider:  ";
        }
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
        background: rgba($lime, 0.25);
        label {
            span, i {
               // display: none;
            }
            
        }
        &:before {
            content: "Yes! You're a lovely human!";
        }
    }
} `
