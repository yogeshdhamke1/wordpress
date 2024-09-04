<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'firstdb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost:8111' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'q5#T>~?p3GPpR^:a>{Z#%dA,pSfZ$]i(Q)tM:9/6I5oPi!dHj]Qj>[/a$%^85q`e' );
define( 'SECURE_AUTH_KEY',  '2u@=53,&{TA 3[ks(RDw/#Ar!Ca1dImDrdO,PEcPRu_WQJDp#ftNqS*i-fS5O~Z}' );
define( 'LOGGED_IN_KEY',    'MscbI1XQ%*dXA8Wf;q11X)%BumS}keg$K~/v^MFn:,84.o,;e.DjrSW`~-,dLGqu' );
define( 'NONCE_KEY',        '*k[8V).b^C:+3FUW5Qo73AZ6|`jsKC<Uq=GgR-u|ub=Bv<SY#0W4iS@O-g(WvM*C' );
define( 'AUTH_SALT',        'O`r93$y*J`{t|/aFk:oRaj;A?I#R#Ji5!]yBp%>^/VB%({A`s^ztqi$I_Wtp)b.z' );
define( 'SECURE_AUTH_SALT', '.6r?V`B8w@[(v^MC/;ZHMOj4zCLX-ELqN_Y;e^T9eVU$lgF>?aP_Qa)kQNrQQ)z$' );
define( 'LOGGED_IN_SALT',   '.jZn?,b5MDu2U./jQaqha9HhFVR83_o/-uKe!I}Ec-[_!f]pAA]Lz!(YQ2x$_I-m' );
define( 'NONCE_SALT',       'q|sObi 0C`L}z{%9quu.*np=wJ|y6[hKIk:sSsEK&k2A~|(AY u^`>4.!S`Ij!F!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
