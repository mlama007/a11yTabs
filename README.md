# ***Tabs***

https://mlama007.github.io/a11yTabs/

### [Accessible Tabs](https://codepen.io/mlama007/pen/zLGWVR) 
* Tabs can be vertical or horizontal without having to change JS. You can change any of the elements as long as the hiarchy stays the same (tablist > tabs)


### _Functionality_
* Navigate to the tabs with the `Tab` key and naviagte to each tab with the arrow keys ( `<` and `>` ).
* You can jump to the first tab with the `Home` key
* You can jump to the last tab with the `End` key

HTML
```html
<script 
<!-- Create element with class="tabs" -->
<div class="tabs">
    
    <!-- Create element with role="tablist" -->~~~~
    <div role="tablist" aria-label="Entertainment">
        <!-- Create element with role="tab" -->
        <button role="tab"> Circle strategic </button>
        <button role="tab"> UX powerPointless </button>
        <button role="tab"> Design thinking </button>
        <button role="tab"> UX strategic </button>
    </div>

    <div>
        <!-- Create elements with role="tabpanel" -->
        <div role="tabpanel">
            <p> Circle back strategic high-level 30,000 ft view so golden goose, yet today shall be a cloudy day, thanks to blue sky thinking. </p>
        </div>
        <div role="tabpanel">
            <p> We've got to manage that low hanging fruit UX powerPointless, yet baseline the procedure and samepage your department..</p>
        </div>
        <div role="tabpanel">
            <p> Circle back value-added UI, or globalize, for we need to harvest synergy effects. Design thinking.</p>
        </div>
        <div role="tabpanel">
            <p> Bake in it. Translating our vision of having a market leading platfrom digital literacy for thought shower cannibalize.</p>
        </div>
    </div>
</div>
```