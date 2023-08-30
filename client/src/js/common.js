const main = document.querySelector("main");
const main_container = main.querySelector(".container");

//main left
const left = main_container.querySelector(".main-left");
// const left_profile = left.querySelector(".profile");
const left_profile_photo = left.querySelector(".profile-photo");
export const left_profile_name = left.querySelector("h2");
export const left_profile_at = left.querySelector("p");
export const left_profile_photo_img = left_profile_photo.querySelector("img");

//main middle cards//

export const create_news = () => {
    const doms = {
        info: document.createElement("div"),
        info_profile: document.createElement("div"),
        info_picture: document.createElement("div"),
        info_control: document.createElement("div"),
        info_comment: document.createElement("div"),
    }
    doms.info.classList.add("info");
    doms.info_profile.classList.add("ifo-profile");
    doms.info_picture.classList.add("info-picture");
    doms.info_control.classList.add("info-control");
    doms.info_comment.classList.add("info-comment");

    doms.info.appendChild(doms.info_profile);
    doms.info.appendChild(doms.info_picture);
    doms.info.appendChild(doms.info_control);
    doms.info.appendChild(doms.info_comment);

    return doms
}

export const create_picture_structure = (picture_dom, info) => {
    const picture = document.createElement("img");
    picture.setAttribute("width", "100%");
    picture_dom.appendChild(picture);
    picture.src = info.img_src
}