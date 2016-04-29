from fabric.api import env, local, abort, sudo, cd, run
from fabric.colors import green, red, blue, cyan
from fabric.context_managers import prefix

env.hosts = ['commandcentral']

REQUIRE_CLEAN = True
DEPLOY_PATH = "/home/cfletcher/Projects/homedashboard"
USER = "cfletcher"
GROUP = "cfletcher"


def deploy():
    print green("Begining update...")
    print ""

    print blue('Checking pre-requisites...')

    print cyan("Checking for local changes...")
    has_changes = local("git status --porcelain", capture=True)
    if REQUIRE_CLEAN and has_changes:
        abort(red("Your working directory is not clean."))

    print cyan("Ensuring remote working area is clean...")
    GIT_CMD = "git --work-tree={0} --git-dir={0}/.git".format(DEPLOY_PATH)
    has_changes = run(GIT_CMD + " status --porcelain")
    if has_changes:
        abort(red("Remote working directory is not clean."))

    print blue("Finished checking pre-requisites.")
    print ""

    print green("Starting deployment...")
    print ""

    print green("Updating environment...")
    with cd(DEPLOY_PATH):
        print cyan("Pulling from master")
        run('git pull')

        sudo('reboot')

print green("Done!")

def test_deploy():
    print green("Beginning TEST deployment...")
    print""

    print green("Changing directory to '{0}'".format(DEPLOY_PATH))
    with cd(DEPLOY_PATH):
        sudo('ls -al')
