export const getPresentDate = () => {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth()));
};

export const dateToJSX = (date) => {
    const presentDate = getPresentDate();
    const isPresent =
        date.getFullYear() === presentDate.getFullYear() &&
        date.getMonth() === presentDate.getMonth();

    return (
        <time dateTime={date.toISOString().slice(0, 7)}>
            {isPresent
                ? 'Present'
                : date.toLocaleString('en-US', {
                      month: 'short',
                      year: 'numeric',
                  })}
        </time>
    );
};
