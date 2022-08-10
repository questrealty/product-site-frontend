<template>
    <div class="header-wrapper">
        <div class="searchbar-wrapper">
            <div class="searchbar">
                <input type="text" placeholder="Search" />
                <button>
                    <img src="../../assets/forSale/Search-Icon.png" alt="search-icon" class="icon" />
                </button>
            </div>
        </div>
        <div class="profile-detail flex">
            <div class="icons flex">
                <img class="icon profileIcon" src="../../assets/customerDashboard/notificationBellIcon.png" alt="notification-icon" />
                <img class="icon profileIcon" src="../../assets/customerDashboard/messageFavoriteIcon.png" alt="notification-icon" />
                <img class="icon profileIcon" src="../../assets/customerDashboard/notificationIcon.png" alt="notification-icon" />
            </div>
            <div class="user-info">
                <div class="profile-info">
                    <p class="name"> {{ profileName }} </p>
                    <p class="title"> {{ profileTitle }} </p>
                </div>
                <img class="profileImage" :src="profileImage" alt="user-image" />
                <select name="lang" id="lang">
                    <option value="EN">EN</option>
                    <option value="FR">FR</option>
                    <option value="GR">DE</option>
                </select>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['profileName', 'profileTitle', 'profileImage'],
};
</script>

<style scoped>
.header-wrapper {
    display: flex;
    justify-content: space-between;
    height: 9vh;
    align-items: center;
    background-color: var(--barley-10);
    border-radius: 3px 3px 0 0;
}
.searchbar-wrapper {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
}

input {
    background: none;
    border: none;
    flex: 1;
    outline: none;
    padding: 2px;
}
::placeholder {
    font-weight: 700;
    color: var(--barley-40);
}
.searchbar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    padding: 5px 15px;
    border-radius: 20px;
}
.searchbar button {
    background: none;
    border: none;
}
.icon {
    width: 20px;
    height: 20px;
}
.profile-detail{
    justify-content: space-between;
    width: 100%;
}
.icons{
    margin-left: 2px;
}
.profileIcon{
    width: 20px;
    height: 20px;
    margin: 2px;
}
.user-info {
    display: flex;
    justify-content: center;
}
.profile-info {
    flex-direction: column;
    margin: 0 5px;
}
.name, .title {
    color: var(--barley-40);
    text-align: right;
}
.name{
    font-size: .7rem;
    font-weight: 700;
}
.title{
    font-size: .7rem
}
.profileImage {
    height: auto;
    width: 20%;
}

select {
    outline: none;
    border: none;
    background-color: var(--barley-10);
    font-size: 0.7rem;
    color: var(--barley-40);
}

option {
    font-size: 0.7rem;
    color: black;
    padding: 5px;
}

@media (min-width: 768px){
    .searchbar-wrapper{
        display: flex;
        width: 100%;
    }
    .profile-detail{
        justify-content: flex-end;
        margin: 3px auto;
        padding: auto 15px;
    }
    
    .profileIcon{
        margin: 8px;
    }
    .user-info {
        width: fit-content;
        margin-left: -10px;
        padding: 0 10px;
    }
    .profile-info {
        flex-direction: column;
        margin: 0 10px;
        align-self: center;
    }
}
</style>
