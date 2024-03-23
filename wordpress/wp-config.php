<?php
/**
 * A configuração de base do WordPress
 *
 * Este ficheiro define os seguintes parâmetros: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, e ABSPATH. Pode obter mais informação
 * visitando {@link https://wordpress.org/support/article/editing-wp-config-php/ Editing
 * wp-config.php} no Codex. As definições de MySQL são-lhe fornecidas pelo seu serviço de alojamento.
 *
 * Este ficheiro contém as seguintes configurações:
 *
 * * Configurações de  MySQL
 * * Chaves secretas
 * * Prefixo das tabelas da base de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Definições de MySQL - obtenha estes dados do seu serviço de alojamento** //
/** O nome da base de dados do WordPress */
define( 'DB_NAME', 'inovahc' );

/** O nome do utilizador de MySQL */
define( 'DB_USER', 'inovahc' );

/** A password do utilizador de MySQL  */
define( 'DB_PASSWORD', 'inovahc' );

/** O nome do serviddor de  MySQL  */
define( 'DB_HOST', 'localhost' );

/** O "Database Charset" a usar na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O "Database Collate type". Se tem dúvidas não mude. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação.
 *
 * Mude para frases únicas e diferentes!
 * Pode gerar frases automáticamente em {@link https://api.wordpress.org/secret-key/1.1/salt/ Serviço de chaves secretas de WordPress.org}
 * Pode mudar estes valores em qualquer altura para invalidar todos os cookies existentes o que terá como resultado obrigar todos os utilizadores a voltarem a fazer login
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', 'cX{R86q]:sBB7o+$poh-!iJX!&nBPg# T`[I[e@F`~;UDVK::(cG%j?yA{l<O_tt' );
define( 'SECURE_AUTH_KEY', 'j_V`;_NY=qR[2}%^A1yhDut`)5!vVGq]s6GXm(,Ei};4tipX/vCQ#}=<ORoAC7`)' );
define( 'LOGGED_IN_KEY', ':>>kVCO@z9/Ds=kPtc HgUJ6G7 8o Re8_#>e{)]dq<K #KROu$u{<g_uDi-?k?A' );
define( 'NONCE_KEY', '?[UzQ![`SMPsnE2O+g@_il/SMl<n4M~6MD*]F(k99zi#3G<ZXe-n=_|^tba6b.`u' );
define( 'AUTH_SALT', 'w<Wu5_GVu?/lHmFa>9lcoM!N5!Us4+cOI[[wwfrk6ps(]<@imK27MMI>`.21He2n' );
define( 'SECURE_AUTH_SALT', 'Me)tbq96PXG@Kd[rT[+{Y5lTNTt]7N`Z$Rp%Jf}Xp/}mlm3y?{v&egk9{>oRie|q' );
define( 'LOGGED_IN_SALT', '3gLIy;?!mu1f](0K&v>A$pDus_ZQ3afzbn):|%[Oz+z@3;Gn!1*`c!_.V]^9zs5:' );
define( 'NONCE_SALT', ')Ss.e+p7[tFd5*0{T1Kh[j!A?}k!I6wx:0vFx/lC6KJ[+!4-L80`X*Z*%.-hnh9U' );

/**#@-*/

/**
 * Prefixo das tabelas de WordPress.
 *
 * Pode suportar múltiplas instalações numa só base de dados, ao dar a cada
 * instalação um prefixo único. Só algarismos, letras e underscores, por favor!
 */
$table_prefix = 'wp_';

/**
 * Para developers: WordPress em modo debugging.
 *
 * Mude isto para true para mostrar avisos enquanto estiver a testar.
 * É vivamente recomendado aos autores de temas e plugins usarem WP_DEBUG
 * no seu ambiente de desenvolvimento.
 *
 * Para mais informações sobre outras constantes que pode usar para debugging,
 * visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* E é tudo. Pare de editar! */

/** Caminho absoluto para a pasta do WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Define as variáveis do WordPress e ficheiros a incluir. */
require_once ABSPATH . 'wp-settings.php';
