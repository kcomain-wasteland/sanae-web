<script>
    export let currentPage;
</script>

<a href="/login" class="nav-item py-1 px-3 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                      text-black bg-blue-300 hover:bg-opacity-20 hover:text-black hover:border-blue-600
                                      dark:text-white dark:bg-blue-500 dark:hover:text-white dark:hover:border-blue-200
                                      {currentPage === "/login" ? "border-blue-400 dark:border-blue-400 border-2" : ""} ">Login</a>