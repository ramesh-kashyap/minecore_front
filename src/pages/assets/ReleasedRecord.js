import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import Link for navigation
const ReleasedRecord = () => {
 const navigate = useNavigate(); // Hook for navigation
      
        const back = (page) => {
        navigate(-1);
        };

    return (

        <div data-v-72d7289a="" data-v-75e437a6="" class="page">
            <div data-v-72d7289a="" class="headers">
                <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                    <div data-v-7401f0fe="" class="left">
                        <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
                    </div>
                    <div data-v-7401f0fe="" class="title overflow1">Records to be released</div>
                    <div data-v-7401f0fe="" class="right"></div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="scroll" id="pageScroll">
                    <div data-v-75e437a6="" class="container">
                        <div data-v-75e437a6="" class="release-top">
                            <div data-v-75e437a6="" class="top-info">
                                <div data-v-75e437a6="" class="info-name">To be released <span class="van-popover__wrapper"><img data-v-75e437a6="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGOSURBVHgBvVUhUMNAELzvxFD7tthgi6PY2mKx1BaLQ2OxYKuxwRZbZC21RBKbynAbLum3k/9cJkx3ZqdJ+rf7/3f3byiAoiiG/DNlxkwrBHJmytyAxpjMp2E8whCai7AGa2bSZGQaxDHjGXNI3YBVvbPJymvA4jci3gcwSaqXgSNezbwvZqJVIhJx2yKO5X8yf+T9nPaJ95mUyY/kA7bGt+dI3PNxAmVS98xRQwy05ogbyMAJ+fEKcZQs81JoxfAlEBcjBisYBwblLPQtzwvaly2+PYkxjHxbNW0zwKzx/44Oe2LrPJ8F4mMYjCiMxdH7W1XrYh7qFzugbg3lil/wz13LeBuRHrkjrm5IrCAjHXbO80QZk0diYBWDrZQ0KccDKQxQEdpT84G6YYMtWikHp5yDR5AOyzRswAG5MmDrefZhjUasTtMl/R1oIVxxDq5xVFB7kqFVHtn1fSBH7C39D+p+qe8D+ZBQfyTurXbaK9MxQZ2jW7UNhaQvVZd+g9FYiEOxWlUm/GJ+SCU24hd866E2b9jQuQAAAABJRU5ErkJggg==" alt=""/></span></div>
                                <p data-v-75e437a6="">0 USDT</p>
                            </div>
                            <div data-v-75e437a6="" class="top-info">
                                <div data-v-75e437a6="" class="info-name">Released</div>
                                <p data-v-75e437a6="">0 USDT</p>
                            </div>
                        </div>
                        <div data-v-75e437a6="" class="release-title">Records to be released</div>
                        <div data-v-75e437a6="" class="release-list">
                            <div data-v-75e437a6="" role="feed" class="van-list" aria-busy="false">
                                
                                <div class="van-list__placeholder"></div>
                            </div>
                            <div data-v-43ae51de="" data-v-75e437a6="" class="empty">
                                <div data-v-43ae51de="" class="van-empty custom-image">
                                    <div class="van-empty__image" style={{width: '2rem', height: '2rem'}}><img src="./static/img1757786439045/empty-BkVz5juj.png"/></div>
                                    <p class="van-empty__description">No data yet</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem', right: '0.2rem'}}></div>
            </div>
            
        </div>
    );
};
export default ReleasedRecord;