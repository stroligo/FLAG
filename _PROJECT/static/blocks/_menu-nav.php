
<div class="controller-nav">
    <nav class="bg-cafe-blue-800 fixed top-0 z-50 w-full min-h-[50px]" id="topo">  
        <div class=" mx-auto flex justify-between p-6 py-4">
            
            <!-- Menu Mobile -->
            <input type="checkbox" id="toggle-menuMobile" style="display:none;">
            <div class="menuMobile ">
                <div class="flex flex-col w-full  ">

                    <div class="absolute left-6 top-4 block"> 
                        <a href="<?php echo home_url(); ?>">
                            <?php svg('logo-cafe',55,40,"fill-white");?> 
                        </a>
                    </div>
                    <label for="toggle-menuMobile" class="absolute right-6 top-5 block">
                        <?php svg('icon-fechar-menu',20,20,"fill-white");?>
                    </label>
                    
                    <ul class=" w-full flex flex-col  text-white gap-3 text-lg mt-20">
                        <a href="<?php echo home_url(); ?>"><li>Home</li></a>
                        <a href="chart"><li>Chart</li></a>
                    </ul>

                    <div class="flex gap-2 my-12 items-center justify-between">
                        <div>
                            <a href="search">
                                <button class="btn-icon btn-icon-white  btn-icon-big">
                                <?php svg('icon-busca',17,17,"fill-white");?> 
                                </button>
                            </a>
                        </div>

                        
                    
                    </div>

                
                
            
                </div>
            </div>

            <!-- Menu Desktop -->
            <div class="flex w-full justify-between">
            
                    <!-- Logo Versão Desktop -->
                    <div class="flex logo">
                        <a href="<?php echo home_url(); ?>">
                        <?php svg('logo-cafe',55,40,"fill-white");?> 
                        </a> 
                    </div>
        
                    <!-- Menu Versão Desktop -->
                    <div class="hidden lg:flex flex-1 justify-end md:gap-2 lg:gap-6">
                    
                        <ul class="flex  font-mulish  items-center text-white md:gap-2 lg:gap-6">
                            <a href="<?php echo home_url(); ?>"><li>Home</li></a>
                            <a href="chart"><li>Chart</li></a>
                        </ul>

                        <div class="flex  items-center">
                            <a href="search">
                            <button class="btn-icon btn-icon-white btn-icon-big">
                                <?php svg('icon-busca',17,17,"fill-white");?> 
                            </button>
                            </a>
                        </div>

                    </div>

                    <div class="lg:hidden flex items-center">
                        <label for="toggle-menuMobile">
                            <?php svg('icon-menu',24,20,"fill-white");?> 
                        </label>
                    </div>
        
            </div>
        
        
        </div> 
    </nav> 
</div>

