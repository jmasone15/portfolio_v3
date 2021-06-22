const configs = {
    light: {
        background: {
            color: {
                value: "#D9D9D9"
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            color: {
                value: "#D9D9D9"
            }
        }
    },
    dark: {
        background: {
            color: {
                value: "#1b1a1a"
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            color: {
                value: "#1b1a1a"
            }
        }
    },
    lightDraw: {
        background: {
            color: {
                value: "#D9D9D9"
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "trail",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                trail: {
                    delay: 0.005,
                    pauseOnStop: false,
                    quantity: 5,
                    particles: {
                        color: {
                            value: "#ff0000",
                            animation: {
                                enable: true,
                                speed: 1000,
                                sync: true
                            }
                        }
                    }
                }
            }
        },
        particles: {
            color: {
                value: "#D9D9D9"
            }
        }
    },
    darkDraw: {
        background: {
            color: {
                value: "#1b1a1a"
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onClick: {
                    enable: true,
                    mode: "trail",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                trail: {
                    delay: 0.005,
                    pauseOnStop: false,
                    quantity: 5,
                    particles: {
                        color: {
                            value: "#ff0000",
                            animation: {
                                enable: true,
                                speed: 1000,
                                sync: true
                            }
                        }
                    }
                }
            }
        },
        particles: {
            color: {
                value: "#1b1a1a"
            }
        }
    }
}
module.exports = configs;