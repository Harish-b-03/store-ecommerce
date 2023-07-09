import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";

const ActiveLink = ({ children, href, activeClassName, props }: any) => {
	const { pathname } = useRouter();
	const child = Children.only(children);
	const childClassName = child.props.className || "";

	let className =
		pathname === href
			? `${childClassName} ${activeClassName}`
			: childClassName;

	// special case/check for "products" page and "shop" tab
	// will make "shop" tab active for paths: "/product/*"
	if (href === "/product") {
		if (pathname.startsWith("/product")) {
			className = `${childClassName} ${activeClassName}`;
		}
	}

	return (
		<Link href={href} {...props}>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</Link>
	);
};

export default ActiveLink;
