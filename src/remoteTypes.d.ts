///<reference types="react" />

declare module "host/HomeHost" {
    const HomeApp: React.ComponentType;

    export default HomeApp;
}



declare module "host/Button" {
    type ButtonProps = {
        onClick?: MouseEventHandler<HTMLButtonElement>;
        children?: ReactNode;
    };

    const Button: React.ComponentType<ButtonProps>;

    export default Button;
}