<div class="row">
<?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; $args = array(
	'post_type' => 'post','paged' => $paged,
	'posts_per_page'=>5,
	'orderby' => 'date',
	'order'   => 'DESC',
	'cat' => '32',

	); query_posts($args);
	?>

   <?php if ( have_posts() ) : ?>
   <?php while ( have_posts() ) : the_post(); ?>
  <!-- post -->

  <div class="row-blog-item">
          <div class="blog-img"><a href="<?php the_permalink() ?>" class="hv-o"><?php if ( has_post_thumbnail() ) { ?>
            <?php the_post_thumbnail( 'thumbnail' ); ?>
            <?php } else { ?>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/sample.png" alt="<?php the_title(); ?>" title="<?php the_title(); ?>">
            <?php } ?></a></div>
          <div class="blog-info">
            <div class="blog-des">
             <a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a>
            </div>


            <div class="blog-summary">
            	<a href="<?php the_permalink() ?>" class="hv-o"><?php echo mb_substr(get_the_excerpt(), 0, 47);  echo('　…続きを読む')?></a>
            </div>

            <div class="blog-link">
             <?php get_template_part( 'part/content', 'blogs-cate-link' ); ?>
             </div>
          </div>
        </div>

  <!-- end post -->
  <?php endwhile; ?>
  	<?php wp_pagenavi(); ?>
  <?php  wp_reset_query(); ?>
  <?php  endif; ?>
</div>
