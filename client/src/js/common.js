const main = document.querySelector("main");
const main_container = main.querySelector(".container");

//main left
const left = main_container.querySelector(".main-left");
const left_profile = left.querySelector(".profile");
const left_profile_photo = left_profile.querySelector(".profile-photo");
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
    doms.info_profile.classList.add("info-profile");
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

export const create_profile_structure = (profile_dom, info) => {
    const profile = document.createElement("div");
    profile.classList.add("profile");
    profile.innerHTML = `
    <div class="profile-photo">
        <img src="" alt="profile-photo">
    </div>
    <div class="profile-description">
        <h2></h2>
        <p></p>
    </div>
    `
    const setting = document.createElement("i");
    setting.className = "uil uil-ellipsis-h";
    profile_dom.appendChild(profile);
    profile_dom.appendChild(setting);

    profile.querySelector("img").src = info.src;
    profile.querySelector("h2").textContent = info.name;
    profile.querySelector('p').textContent = `${info.position}, ${info.time}`;
}

// // Create Control
export const create_control_structure = (control_dom) => {
    const mainControl = document.createElement('div')
    mainControl.classList.add('main-control')
    const like = document.createElement('i')
    like.className = "uil uil-heart control_heart"
    const comment = document.createElement('i')
    comment.className = "uil uil-comment-dots"
    const share = document.createElement('i')
    share.className = 'uil uil-share-alt'
    mainControl.appendChild(like)
    mainControl.appendChild(comment)
    mainControl.appendChild(share)
    const mark = document.createElement('i')
    mark.className = 'uil uil-bookmark'
    control_dom.appendChild(mainControl)
    control_dom.appendChild(mark)
  }
  
  // Create Comment
  export const create_comment_structure = (comment_dom, info) => {
    const likePanel = document.createElement('div')
    likePanel.classList.add('profile-photo-list')
    info.img_src_list.forEach(element => {
      console.log(element);
      const likePeople = document.createElement('img')
      // likePeople.innerHTML = `<img alt = "profile photo">`
      likePeople.src = element
      likePeople.classList.add("profile-photo")
      likePanel.appendChild(likePeople)
    });
  
    const likeInfo = document.createElement('span')
    likeInfo.classList.add('like-info')
    likeInfo.innerHTML = `Liked by <strong> ${info.first_people_name}</strong > and <strong> ${info.like_peoples_number}</strong> others`
    likePanel.appendChild(likeInfo)
    const commentInfo = document.createElement('span')
    commentInfo.classList.add('comment-info')
    commentInfo.textContent = info.comment_info
    const viewBtn = document.createElement('span')
    viewBtn.classList.add('view-btn')
    viewBtn.textContent = `View all ${info.view_number} comments`
    comment_dom.appendChild(likePanel)
    comment_dom.appendChild(commentInfo)
    comment_dom.appendChild(viewBtn)
  }