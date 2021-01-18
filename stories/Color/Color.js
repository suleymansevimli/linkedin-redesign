import React from "react";

const ColorSchema = () => {
    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <h3 style={styles.title}>Colors</h3>
                <div style={styles.colors}>
                    <div style={styles.colorContent}>
                        <h4>Black</h4>
                        <div style={styles.black}/>
                    </div>

                    <div style={styles.colorContent}>
                        <h4>Blue</h4>
                        <div style={styles.blue}/>
                    </div>

                    <div style={styles.colorContent}>
                        <h4>Green</h4>
                        <div style={styles.green}/>
                    </div>

                    <div style={styles.colorContent}>
                        <h4>Gray</h4>
                        <div style={styles.gray}/>
                    </div>

                    <div style={styles.colorContent}>
                        <h4>Soft Gray</h4>
                        <div style={styles.softGray}/>
                    </div>

                    <div style={styles.colorContent}>
                        <h4>Light Gray</h4>
                        <div style={styles.lightGray}/>
                    </div>

                    <div style={styles.colorContent}>
                        <h4>Extra Light Gray</h4>
                        <div style={styles.extraLightGray}/>
                    </div>

                    <div style={styles.colorContent}>
                        <h4>White</h4>
                        <div style={styles.white}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ColorSchema;

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    wrapper: {
        padding: "100px"
    },

    title: {
        fontSize: "34px",
        color: "var(--black)"
    },

    colors: {
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        gridColumnGap:"30px",
        placeContent: "center"
    },

    colorContent: {
        display: "flex",
        flexDirection: "column"
    },

    black: {
        backgroundColor: "var(--black)",
        borderRadius: "20px",
        width: 250,
        height: 120
    },

    blue: {
        backgroundColor: "var(--blue)",
        borderRadius: "20px",
        width: 250,
        height: 120
    },

    green: {
        backgroundColor: "var(--green)",
        borderRadius: "20px",
        width: 250,
        height: 120
    },

    gray: {
        backgroundColor: "var(--gray)",
        borderRadius: "20px",
        width: 250,
        height: 120
    },

    softGray: {
        backgroundColor: "var(--soft-gray)",
        borderRadius: "20px",
        width: 250,
        height: 120
    },

    lightGray: {
        border: "0.4px solid rgba(0,0,0,0.1)",
        backgroundColor: "var(--light-gray)",
        borderRadius: "20px",
        width: 250,
        height: 120
    },

    extraLightGray: {
        backgroundColor: "var(--extra-light-gray)",
        borderRadius: "20px",
        width: 250,
        height: 120
    },

    white: {
        border: "0.4px solid #eee",
        backgroundColor: "var(--white)",
        borderRadius: "20px",
        width: 250,
        height: 120
    }
}