export function TwitterFollowCard({Button, edit, userName, children, isFollowing}){
    const imgsrc = `https://unavatar.io/${userName}`;
    const userInfo = edit(userName);
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src={imgsrc}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{userInfo}</span>
                </div>
            </header>

            <aside>
                <Button></Button>
            </aside>
        </article>
    )
}