import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'; // Import Link for navigation
import Api from "../../Requests/Api";
const Info = () => {
    const navigate = useNavigate(); // Hook for navigation               
    const back = (page) => {

        navigate(-1);
    };
    useEffect(() => {
        fetchUserDetails();
    }, []);
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserDetails = async () => {
        try {
            const response = await Api.get('/user');
            setUserDetails(response.data); // This should be your user object
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };
    return (

        <div data-v-72d7289a="" data-v-506d6368="" class="page" nobg="false">
            <div data-v-72d7289a="" class="headers">
                <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                    <div data-v-7401f0fe="" class="left">
                        <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon" /></div>
                    </div>
                    <div data-v-7401f0fe="" class="title overflow1">Personal information</div>
                    <div data-v-7401f0fe="" class="right"></div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="scroll" id="pageScroll">
                    <div data-v-506d6368="" class="info">
                        <div data-v-506d6368="" class="info-avatar">
                            <div data-v-506d6368="" class="avatar-info">
                                <div data-v-506d6368="" class="avatar">
                                    <img data-v-506d6368="" class="img" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/2024-03-18/87a50424fe354d7880f61aee2742c766.png" alt="" />
                                    <div data-v-506d6368="" class="edit"><img data-v-506d6368="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPeSURBVHgBxZlNTBNBFMffbKtBLUmJkIiJCVwgeGFRTlzoCp6MJp70Jo3FeAMSTTwJ1YMHTSg3tBjrQaInEoknra0XDsaP9WTAAzUYPCixCagcth3fm3ZLW9v96rL8ky7dmdn2x3sz8968MnAoORUJQR5kADYILC8DZ0FsDha7s8Agg20ZAP4JJEirylwaHIjZGSynxhFgawzBxstgrH5VBi9pkHxRVZnNWH7KyqAi2GQRzAWxhFVQU0A5NYoW41Ng22KmX53BS1QdiicMRxl14jybds9q9STF1KEHE/V6awIKl/KtBeAQAi/EQAWmKaqSyFZ3STUfyP1OeQZH4rgbcP9Cra7/AIVbGZfBa6FB5OSV6ermChfLydERHPkI9lYT6tBcTL8pAcqpqx2Qz6UQsANcULP/IChtMmxqfyD1Q7XzaBYkrVOfj/5Scz436Rbc2SMDcL3rgoAkLW+tweiHewLWgoKQ348sIFa2sGDBetoquCCCu3U8LN4TkENIXB1aC1mxsEiE9dyFW9/egItvb8P91UVx3x04BtGeEesflveL/VdfxSFoUOVwJLIUvWZXn8OTtaRoU9r6Sha1oDEBKLKSBudetVtJZLH4iWsCqNl/ABwoKL+MhCQMZSFoQGZufTFwB861D4j7ebSk5TlIkkBGF7NecKhqOFoE69s/hVt1SN2li9+X4O6Xp2BLuHlLwJ25tx6crvamw6X3BHfzs4P9n7FeCTeaDrApM7hoT7jkVsdwQjxIq9hWnucdnFBQsjPaYzghAsxaGUh7mNdwxIaA3BJgqFX2Gg7oVIiAkq1Ug8A8gSsQfiULvgGH2l04EEcBP0YSFWwslf5gN3w8Fa9oK2zCz0TUONrUavoZtGHPF+OzofKQltTT4sRvOg/L3VoNp1vOCpz1cSxDbHrCOoMvw5SLQtfK5jdo3rcT+Nf/bsC77LJ4TzH2zNIN6G/pBjNZzLDTdCkASloM8y9DQNpmKJ+zkS7VFP0jAcxuTF2MlQfxhy4i/+d8xmj8yWBXw3Ak+gxzF7OEXhbZOZP4clNoxUtQJ/SRi9//WqlwsVMZuxhLIkXribvyLjkZoTR7GvZULFxer6nYYMR51MTVuyr87upiUu3azOuIt6UPEmeqOhzvq26uvUUz7bwo6HglhluK75BSu8tA8qvLMcxqx2A3RW4dfli3xGcY5AoPsnCx2Oi2shjKJozgSKZRWExayafgnHwMbokWohToxFAWMxtqs4iOJZKcNoVuH3RwliaLzYA/EFOVmKUc1DZguehQjfYPiWMrQ1guDl9lP0NgIswp18R0DjOmYlJiW/8AnHDah4J4DDoAAAAASUVORK5CYII=" alt="" /></div>
                                </div>
                                <div data-v-506d6368="" class="user-name">
                                    <div data-v-506d6368="" class="name">{userDetails?.username}</div>
                                    <div data-v-506d6368="" class="level-effi">
                                        <div data-v-506d6368="" class="level"> V0Level</div>

                                    </div>
                                </div>
                            </div>
                            <div data-v-506d6368="" class="avatar-list">
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="text">UID</div>
                                    <div data-v-506d6368="" class="bt">
                                        <span data-v-506d6368="">900129957</span>
                                        <div data-v-506d6368="" class="bt-img"><img data-v-506d6368="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZbhDYMgEIWfpgN0BEdgg9INukFXYSQ30G7gKN2g5RJMSURKq8f5417yosAl9+U4kmuQlw3mUO895QKM94vZts0A3MAveyoMfOJLuX4QVfY8L0oBKPkV+2hA1FcthDVXwGLZ7Zfov/N2+E/H6PYo3xDtO7qCKt2+diDeAwqgAAqgAAqgAKUT0Vbd8ZkvDAQAuuCFpK+gr1WB0fuR2JtqAVBylzrQZygOQLLgH8vNWvImfCmAazwfg5N6A3XBXqvrQUFJAAAAAElFTkSuQmCC" alt="" /></div>
                                    </div>
                                </div>
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="text">Registration information</div>
                                    <div data-v-506d6368="" class="bt">
                                        <span data-v-506d6368="">****</span>
                                        <div data-v-506d6368="" class="bt-img"><img data-v-506d6368="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7Zc7TBtBEIb3jEHKIYGIU5rWlNCaMm7tlhYamoDEw3RRJIooFU8JkoImlKGF1imhDClzLenggqBwJJ75f+cWjde75+MMRRSPdPLe7e7st7Mzs2OlutKVrvzb4qknkpWVlVcvIGyfnp6Gy8vL9XZztre3h2dmZk7UcwACwB8aGhrzPG/07u6ucH9/7zcp9rx6JpMJrq+vv1er1UNz/vr6+hR+injCi4uL964NPRqQYAMDAyUs/tqEipEQmzjQoAKuIbe3t2+XlpbOVKeAGxsbI7DMJBbLtSiCxQD8K2q/dMCHPT09JwAaE/P25+fnD1xrJgZcW1urQFnZhMJPLZvNHs3Ozoayb2dnJ1+v10fQLNk2lAQuMaB5JATDczA3N1dLMn9ra6sIX5xSj4SjZNsNsMAFsNhn02JxArgRlQKuLSCOdULCwa9qCwsLe+Y4+ib6ilg4F41jUDB6v1k22ICDVXMAryDYTuJOwouBa/I52665yM3NzRSAClblfwPHt+mQ4IDcc0FmbB+jaG0Lh2isuuAoLrio78FFYO0J6CskAuTCTCVCcWDzF8Lp6IyCZh/NT729vatRdCsXHGVxcXGfuvU7g4g5ti3g1dWVTAshA8IcQwvL1NHf379KAPjnMRYaj7OcFOoWm8nhZirHAkbWK+l3Zn9btOL7qHg9mp6e/smGKyCUQ6gbm9kVektkcAIaGT6w3aGNSZnMsG7jSA/TwGmh1eVRS4YWwKSCnf7WbRypnxZOjM+5+poAz8/Pj7RPMDo3NzdLjnlnQvlkJ3C8ZaQ/464+dgKy5MHgr/odkGXTJyh9fX3HYkyigHDAMVVV5HzT51uO+PLysgYfC/XiOMI3ZvhDSaDHpIWjyFQFCW3zWwBpRd/3P4pP+cHBwQk5hj4njyUNHK9RqYP50zbOGiRMG7x+xKcirz4NpzrwuQiuItOZ7Wgf+uIUISGXccwV8Yn5Lp8Wjq4SnUbiDbatBxHJrKDHWyamCAj6sxIbxCkdokjYjZuXtGB9p1JazvUf5qkL1hY4Xc8xaTN34dsPOS+6rwsaDM9DX1x5ZUqsBRlppjPrXZt90cINR4/5DxKgsPii7+4k4rRgZCErHAVWY9XcNMcFpoy/nY+RWAsiQD5wUZe/sMhkeYUmi4e87KM1MTdgMcHErp5LbFdd3Fg+tsKzK13pyv8qfwANUjnGs5VKfAAAAABJRU5ErkJggg==" /></div>
                                    </div>
                                </div>
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="text">Invitation link</div>
                                    <div data-v-506d6368="" class="bt">
                                        <span data-v-506d6368="">https://getminecore.net/user/register/LE2JQRJ8</span>
                                        <div data-v-506d6368="" class="bt-img"><img data-v-506d6368="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZbhDYMgEIWfpgN0BEdgg9INukFXYSQ30G7gKN2g5RJMSURKq8f5417yosAl9+U4kmuQlw3mUO895QKM94vZts0A3MAveyoMfOJLuX4QVfY8L0oBKPkV+2hA1FcthDVXwGLZ7Zfov/N2+E/H6PYo3xDtO7qCKt2+diDeAwqgAAqgAAqgAKUT0Vbd8ZkvDAQAuuCFpK+gr1WB0fuR2JtqAVBylzrQZygOQLLgH8vNWvImfCmAazwfg5N6A3XBXqvrQUFJAAAAAElFTkSuQmCC" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-506d6368="" class="info-list">
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="i-l">Superior</div>
                                    <div data-v-506d6368="" class="i-r"><span data-v-506d6368="">900092727</span></div>
                                </div>
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="i-l">Account</div>
                                    <div data-v-506d6368="" class="i-r"><span data-v-506d6368="">Ashu123</span><img data-v-506d6368="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZbhDYMgEIWfpgN0BEdgg9INukFXYSQ30G7gKN2g5RJMSURKq8f5417yosAl9+U4kmuQlw3mUO895QKM94vZts0A3MAveyoMfOJLuX4QVfY8L0oBKPkV+2hA1FcthDVXwGLZ7Zfov/N2+E/H6PYo3xDtO7qCKt2+diDeAwqgAAqgAAqgAKUT0Vbd8ZkvDAQAuuCFpK+gr1WB0fuR2JtqAVBylzrQZygOQLLgH8vNWvImfCmAazwfg5N6A3XBXqvrQUFJAAAAAElFTkSuQmCC" alt="" /></div>
                                </div>
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="i-l">Telephone</div>
                                    <div data-v-506d6368="" class="i-r"><span data-v-506d6368="">9876543210</span><img data-v-506d6368="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZbhDYMgEIWfpgN0BEdgg9INukFXYSQ30G7gKN2g5RJMSURKq8f5417yosAl9+U4kmuQlw3mUO895QKM94vZts0A3MAveyoMfOJLuX4QVfY8L0oBKPkV+2hA1FcthDVXwGLZ7Zfov/N2+E/H6PYo3xDtO7qCKt2+diDeAwqgAAqgAAqgAKUT0Vbd8ZkvDAQAuuCFpK+gr1WB0fuR2JtqAVBylzrQZygOQLLgH8vNWvImfCmAazwfg5N6A3XBXqvrQUFJAAAAAElFTkSuQmCC" alt="" /></div>
                                </div>
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="i-l">Member Level</div>
                                    <div data-v-506d6368="" class="i-r"><span data-v-506d6368="">V0Level</span><img data-v-506d6368="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArHSURBVHgB7dg9jhxVFIbhGguJ1EthC6REsAK20EjkY3IbvARYwRAxobfAUpAckTCMf8oez/RPVXfdqnvOeR6pdaWOS/ree4cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAMu1e3L3a/3TwfAAJ7NgCT7X69/f3+uB7uvn4jAoDIrgZgkvfjfzf8+OmPq7u/h6t/v3390w//DADBCACY4Mn4j0QAEJQAgBMOjv9IBAABCQA44uT4j0QAEIwAgAMmj/9IBACBCADYY/b4j0QAEIQAgEfOHv+RCAACEADwwMXjPxIBQOcEAHy02PiPRADQMQEAQ4PxH4kAoFMCgPKajf9IBAAdEgCU1nz8RyIA6IwAoKzVxn8kAoCOCABKWn38RyIA6IQAoJzNxn8kAoAOCABK2Xz8RyIA2JgAoIxuxn8kAoANCQBK6G78RyIA2IgAIL1ux38kAoANCABS6378RyIAWJkAIK0w4z8SAcCKBAAphRv/kQgAViIASCfs+I9EALACAUAq4cd/JAKAxgQAaaQZ/5EIABoSAKSQbvxHIgBoRAAQXtrxH4kAoAEBQGjpx38kAoCFCQDC2r386/vh6upmqEIEAAt6NkBQr3/+7s/748VQxd3VN8Pd1292v908HwAu5AWA8Havbq+HSiHgJQBYgAAgBREAMI8AIA0RADCdACAVEQAwjQAgHREAcJoAICURAHCcACAtEQBwmAAgNREAsJ8AID0RAPCUAKAEEQDwJQFAGSIA4DMBQCkiAOADAUA5IgBAAFCUCACqEwCUJQKAygQApYkAoCoBQHkiAKhIAMAgAoB6BAB8JAKASgQAPCACgCoEADwiAoAKBADsIQKA7AQAHCACgMwEABwhAoCsBACcIAKAjAQATCACgGwEAEwkAoBMBADMIAKALAQAzCQCgAwEAJxBBADRCQA4kwgAIhMAcAERAEQlAOBCIgCISADAAkQAEI0AgIWIACASAQALEgFAFAIAFiYCgAgEADQgAoDeCQBoRAQAPRMA0JAIAHolAKAxEQD0SADACkQA0BsBACsRAUBPBACsSAQAvRAAsDIRAPRAAMAGRACwNQEAGxEBwJYEAGxIBABbEQCwMREAbEEAQAdEALA2AQCdEAHAmgQAdEQEAGsRANAZEQCsQQBAh0QA0JoAgE6JAKAlAQAdEwFAKwIAOicCgBYEAAQgAoClCQAIQgQASxIAEIgIAJYiACAYEQAsQQBAQCIAuJQAgKBEAHAJAQCBiQDgXAIAghMBwDkEACQgAoC5BAAkIQKAOQQAJCICgKkEACQjAoApBAAkJAKAUwQAJCUCgGMEACQmAoBDBAAkJwKAfQQAFCACgMcEABQhAoCHBAAUIgKAkQCAYkQA8I4AgIJEACAAoCgRALUJAChMBEBdAgCKEwFQkwAARAAUJACA90QA1CIAgE9EANQhAIAviACoQQAAT4gAyE8AAHuJAMhNAAAHiQDISwAAR4kAyEkAACeJAMhHAACTiADIRQAAk4kAyEMAALOIAMhBAACziQCITwAAZxEBEJsAAM4mAiAuAQBcRARATAIAuJgIgHgEALAIEQCxCABgMSIA4hAAwKJEAMQgAIDFiQDonwAAmhAB0DcBADQjAqBfXw0A7dS6ZPx3/3s7QAheAIAm7m//L+6P66GKu/vb/9v72/8vbv/EIACAxRl/6J8AABZl/CEGAQAsxvhDHAIAWITxh1gEAHAx4w/xCADgIsYfYhIAwNmMP8QlAICzGH+ITQAAsxl/iE8AALMYf8hBAACTGX/IQwAAkxh/yEUAACcZf8hHAABHGX/ISQAABxl/yEsAAHsZf8hNAABPGH/ITwAAXzD+UIMAAD4x/lCHAADeM/5QiwAAjD8UJACgOOMPNQkAKMz4Q10CAIoy/lCbAICCjD8gAKAY4w+8IwCgEOMPjAQAFGH8gYcEABRg/IHHBAAkZ/yBfQQAJGb8gUMEACRl/IFjBAAkZPyBUwQAJGP8gSkEACRi/IGpBAAkYfyBOQQAJGD8gbkEAARn/IFzCAAIzPgD5xIAEJTxBy4hACAg4w9cSgBAMMYfWIIAgECMP7AUAQBBGH9gSQIAAjD+wNIEAHTO+AMtCADomPEHWhEA0CnjD7QkAKBDxh9oTQBAZ4w/sAYBAB0x/sBaBAB0wvgDaxIA0AHjD6xNAMDGjD+wBQEAGzL+wFYEAGzE+ANbEgCwAeMPbE0AwMqMP9ADAQArMv5ALwQArMT4Az0RALAC4w/0RgBAY8Yf6JEAgIaMP9ArAQCNGH+gZwIAGjD+QO8EACzM+AMRCABYkPEHohAAsBDjD0QiAGABxh+IRgDAhYw/EJEAgAsYfyAqAQBnMv5AZAIAzmD8gegEAMxk/IEMBADMYPyBLAQATGT8gUwEAExg/IFsBACcYPyBjAQAHGH8gawEABxg/IHMBADsYfyB7AQAPGL8gQoEADxg/IEqBAB8ZPyBSgQADMYfqEcAUJ7xByoSAJRm/IGqBABlGX+gMgFAScYfqE4AUI7xBxAAFGP8AT4QAJRh/AE+EwCUYPwBviQASM/4AzwlAEjN+APsJwBIy/gDHCYASMn4AxwnAEjH+AOcJgBIxfgDTCMASMP4A0wnAEjB+APMIwAIz/gDzCcACM34A5xHABDW7uVf3w9XVzdDFcYfWNCzAYJ6/fN3fw53wx9DBcYfWJgXAMLbvbz9/f5L/nHIyvgDDQgAUkgbAcYfaEQAkEa6CDD+QEMCgFTSRIDxBxoTAKQTPgKMP7ACAUBKYSPA+AMrEQCkFS4CjD+wIgFAamEiwPgDKxMApNd9BBh/YAMCgBK6jQDjD2xEAFBGdxFg/IENCQBK6SYCjD+wMQFAOZtHgPEHOiAAKGmzCDD+QCcEAGWtHgHGH+iIAKC01SLA+AOdEQCU1zwCjD/QIQEAQ8MIMP5ApwQAfLR4BBh/oGMCAB5YLAKMP9A5AQCPXBwBxh8IQADAHmdHgPEHghAAcMDsCDD+QCACAI6YHAHGHwhGAMAJJyPA+AMBCQCY4GAEGH8gKAEAEz2JAOMPBCYAYIZPEWD8AaCW3avb6931zfMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDw/gdWdZnUv6ss7QAAAABJRU5ErkJggg==" alt="" /></div>
                                </div>
                                <div data-v-506d6368="" class="item">
                                    <div data-v-506d6368="" class="i-l">Registration time</div>
                                    <div data-v-506d6368="" class="i-r"><span data-v-506d6368="">2025-09-20 02:00:52</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>
            </div>

        </div>
    );
};
export default Info;
