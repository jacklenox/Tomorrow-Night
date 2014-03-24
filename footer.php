<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Tomorrow Night
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			Proudly powered by <a href="<?php echo esc_url( __( 'http://wordpress.org/', 'tomorrow-night' ) ); ?>"><?php printf( __( '%s', 'tomorrow-night' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'tomorrow-night' ), 'Tomorrow Night', '<a href="http://haveposts.com" rel="designer">Jack Lenox</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
